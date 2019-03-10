
# .Net Core

## MacOS

  * Install: `brew cask install netcore`
  * Init project
    * `npm install -g yo bower grunt-cli gulp generator-aspnet`
	* `mkdir src && cd src && yo aspnet`
	* make sure `dotnet` and `*.vsproj` has compatible dotnet version. For example, `dotnet --version` gets `2.2.103`, and `*.vsproj` file has `netcoreapp2.0`.
  * Restore, build and run: `dotnet restore && dotnet build && dotnet run`

## References
 
  * [Building Projects with Yeoman](https://jakeydocs.readthedocs.io/en/latest/client-side/yeoman.html)

