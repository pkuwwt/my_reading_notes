
# How to install a portable miniconda installation

## Steps

  * Download [miniconda](https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe)
  * Install it quitely: 
```
Miniconda3-latest-Windows-x86_64.exe /InstallationType=JustMe /AddToPath=0 /RegisterPython=0 /NoRegistry=1 /S /D=%~dp0\miniconda
```
  * Add `conda-forge` channel for installing packages
```
cd miniconda
_conda config --add channels conda-forge
```
  * Create an environment with `-p` to specify install path
```
_conda create -p %~dp0\your-env-name -y
```
  * Install packages for the installation `your-env-name`
```
_conda install -p %~dp0\your-env-name psycopg2
```
  * Setup the environment variables for the installation `your-env-name`: `PATH` and `PYTHONPATH`
  
  
## Scripts

Place the `Miniconda3-latest-Windows-x86_64.exe` and the following scripts in the same directory. 

  * run `install.bat` to install miniconda
  * revise `create_env.bat` as you wish, i.e. the `NAME` and the packages you want to install
  * run `create_env.bat`
  * the `python.bat` in your installnation will be runnable.

`install.bat`:
```cmd
rmdir /q /s %~dp0\miniconda
Miniconda3-latest-Windows-x86_64.exe /InstallationType=JustMe /AddToPath=0 /RegisterPython=0 /NoRegistry=1 /S /D=%~dp0\miniconda

cd %~dp0\miniconda
_conda config --add channels conda-forge
```

`create_env.bat`:
```cmd
SET NAME=postgis2
cd %~dp0\miniconda
_conda create -p %~dp0\%NAME% -y
_conda install -p %~dp0\%NAME% -y psycopg2 pymysql sqlalchemy pymysql
copy %~dp0\python.bat .
cd ..
```

`python.bat`:
```cmd
SET ROOT=%~dp0
SET PATH=%PATH%;%ROOT%\Library\bin;%ROOT%;%ROOT%\DLLs
SET PYTHONPATH=%ROOT%\lib\site-packages
python
```
