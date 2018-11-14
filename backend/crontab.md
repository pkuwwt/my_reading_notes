
# crontab

`crontab` is the scheduling tool in Linux. You can use it to repeat a job.

## Add a job

### Add by Editing in Terminal
```bash
export EDITOR=vim
crontab -e
```

### Add from a File

```bash
crontab file
```

The content of a crontab file is as follows:
```crontab
0 0 * * * /path/to/script     # execute at 00:00: at each day
```

You can specify minutes, hour, day, week, and month.

## Commands

  * list crontab: `crontab -l`
  * where the crontab store: `sudo cat /var/spool/cron/crontabs/*`
  
