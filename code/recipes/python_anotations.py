
def merge(d1, d2):
    d = d1.copy()
    d.update(d2)
    return d

# A decorator to inject variables
def valueDecorator(*_args, **_kargs):
    def wrapper(f):
        def wrapper2(*args, **kargs):
            return f(*args, **kargs)
        wrapper2.__name__ = f.__name__
        wrapper2.__doc__ = f.__doc__
        oldVars = getattr(f, 'Vars', [])
        oldNamedVars = getattr(f, 'NamedVars', {})
        wrapper2.Vars = oldVars + list(_args)
        wrapper2.NamedVars = merge(oldNamedVars, _kargs)
        return wrapper2
    return wrapper

@valueDecorator(12, 13, a=2)
@valueDecorator(10, 11, a=1)
def func():
    print(func.Vars)
    print(func.NamedVars)
