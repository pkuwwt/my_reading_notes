
# Story behind "hello world" of C

## Program
```C hello.c
#include <stdio.h>
void main () {
    printf("hello world!\n");
}
```

The compiling command is
```bash
gcc hello.c -o hello.out
```

Then execute it with
```bash
./hello.out
```

## Compiling

```bash
gcc -E hello.c -o hello.i
```

## References

  * [Story behind hello world](https://www.youtube.com/watch?v=q-F1qSMkb2w)
  * [The four stages of compiling a C program](https://www.calleerlandsson.com/posts/the-four-stages-of-compiling-a-c-program/)
  
