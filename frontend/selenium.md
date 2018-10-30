
# Selenium Webdriver for Testing

## Chrome Webdriver

### Collecting Events

```csharp
DesiredCapabilities caps = DesiredCapabilities.chrome();
LoggingPreferences logPrefs = new LoggingPreferences();
logPrefs.enable(LogType.PERFORMANCE, Level.INFO);
caps.setCapability(CapabilityType.LOGGING_PREFS, logPrefs);

WebDriver driver=new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), caps);
 
driver.get("https://codoid.com/about-codoid/");
 
List<LogEntry> entries = driver.manage().logs().get(LogType.PERFORMANCE).getAll();
System.out.println(entries.size() + " " + LogType.PERFORMANCE + " log entries found");
for (LogEntry entry : entries) {
          System.out.println(new Date(entry.getTimestamp()) + " " + entry.getLevel() + " " + entry.getMessage());
}
```

## Firefox Webdriver
