
# MediaWiki

## Installation

This intallation guide works for [MediaWiki 1.3.4](https://github.com/wikimedia/mediawiki), [mwdumper 1.25](https://gerrit.wikimedia.org/r/mediawiki/tools/mwdumper) and Ubuntu16.04.

### Outline

  * Download xml dump: a huge compressed bz2 file
  * Compile mwdumper: need to revise the code
  * Convert xml to sql by mwdumper
  * Configure MySQL: set the encoding to `utf8mb4`
  * Download and install mediawiki server: `git clone` and `compose install`
  * Reconfigure MySQL: clean the tables, change a column
  * Import sql to MySQL
  
