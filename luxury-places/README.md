# Luxury Places Website

## How to run?
```npm run dev```

## How to deploy?
```npm run build```
```firebase deploy```

## Issues
In case of error when running `firebase deploy`
```sh
firebase : File C:\Users\Ania\AppData\Roaming\npm\firebase.ps1 cannot be loaded because running scripts is disabled on this system.
```
Remove this file and run deploy again
```sh
rm C:\Users\Ania\AppData\Roaming\npm\firebase.ps1
```