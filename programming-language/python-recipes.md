
# Python Recipes

## Path and directory of the script file

```python
import os
script_path = lambda: os.path.realpath(__file__)
script_dir  = lambda: os.path.dirname(script_path())
```

where `__file__` variable exists only in the script, but not in interactive interpreters. 

Refer to [How do I get the  path of a python script](https://stackoverflow.com/questions/595305/how-do-i-get-the-path-of-a-the-python-script-i-am-running-in)
