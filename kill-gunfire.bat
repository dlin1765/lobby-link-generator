@ECHO OFF
setlocal
set progToWaitForTerminate=Google Chrome.exe

taskkill /f /fi "imagename eq %progToWaitForTerminate%"