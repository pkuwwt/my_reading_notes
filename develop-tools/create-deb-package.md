
# Create deb package from source

We usually install software from source by

```
./configure
make
sudo make install
```

In order to create a deb package, just need to replace `sudo make install` with `sudo checkinstall`.

`checkinstall` will package the installed files to a deb file, and install it. 

During the packaging, it will ask a lot of questions, including requirements and description etc.


If you need to revise the dependencies after the deb file is generated, you can use the following script:

```
#!/bin/bash

if [[ -z "$1" ]]; then
  echo "Syntax: $0 debfile"
  exit 1
fi

DEBFILE="$1"
TMPDIR=`mktemp -d /tmp/deb.XXXXXXXXXX` || exit 1
OUTPUT=`basename "$DEBFILE" .deb`.modfied.deb

if [[ -e "$OUTPUT" ]]; then
  echo "$OUTPUT exists."
  rm -r "$TMPDIR"
  exit 1
fi

dpkg-deb -x "$DEBFILE" "$TMPDIR"
dpkg-deb --control "$DEBFILE" "$TMPDIR"/DEBIAN

if [[ ! -e "$TMPDIR"/DEBIAN/control ]]; then
  echo DEBIAN/control not found.

  rm -r "$TMPDIR"
  exit 1
fi

CONTROL="$TMPDIR"/DEBIAN/control

MOD=`stat -c "%y" "$CONTROL"`
vi "$CONTROL"

if [[ "$MOD" == `stat -c "%y" "$CONTROL"` ]]; then
  echo Not modfied.
else
  echo Building new deb...
  dpkg -b "$TMPDIR" "$OUTPUT"
fi

rm -r "$TMPDIR"
```

The usage of this script (say `videbcontrol`) is

```
chmod +x videbcontrol
./videbcontrol your.deb
```

and then revise the `Depends:` line in the editor.


## References:

  * [HOWTO: Easily modify dependencies of a .deb file](https://ubuntuforums.org/showthread.php?t=636724)
  * [Create a .deb file from Source in Ubuntu](https://www.ostechnix.com/create-deb-file-source-ubuntu-16-04/)
