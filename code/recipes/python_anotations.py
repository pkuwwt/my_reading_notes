
# A decorator to inject variables
def valueDecorator(*args, **kargs):
    _args = args
    _kargs = kargs
    def wrapper(f):
        def wrapper2(*args, **kargs):
            wrapper2.__name__ = f.__name__
            wrapper2.__doc__ = f.__doc__
            nonlocal _args
            nonlocal _kargs
            wrapper2.Vars = wrapper2.__closure__[0].cell_contents
            wrapper2.NamedVars = wrapper2.__closure__[1].cell_contents
            return f(*args, **kargs)
        return wrapper2
    return wrapper
    
@valueDecorator(10, 11, a=1)
def func():
    print(func.Vars)
    print(func.NamedVars)
