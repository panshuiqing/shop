import * as path from 'path';
import * as electron from 'electron';

const BrowserWindow = electron.BrowserWindow;
const app = electron.app;
var mainWindow: Electron.BrowserWindow = null;
const debug = /--debug/.test(process.argv[2]);

function initialize() {
    var shouldQuit = makeSingleInstance()
    if (shouldQuit) return app.quit()


    function createWindow() {
        var windowOptions: Electron.BrowserWindowOptions = {
            width: 800,
            minWidth: 680,
            minHeight: 400,
            height: 480,
            title: app.getName()
        }

        mainWindow = new BrowserWindow(windowOptions)
        mainWindow.loadURL(path.join('file://', __dirname, 'index.html'))

        // Launch fullscreen with DevTools open, usage: npm run debug
        if (debug) {
            mainWindow.webContents.openDevTools()
            mainWindow.maximize()
            require('devtron').install()
        }

        mainWindow.on('closed', function() {
            mainWindow = null
        })
    }

    app.on('ready', function() {
        createWindow()
        // mainWindow.setMenuBarVisibility(false);
    })

    app.on('window-all-closed', function() {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })

    app.on('activate', function() {
        if (mainWindow === null) {
            createWindow()
        }
    })
}

// Make this app a single instance app.
//
// The main window will be restored and focused instead of a second window
// opened when a person attempts to launch a second instance.
//
// Returns true if the current version of the app should quit instead of
// launching.
function makeSingleInstance() {
    if (process.mas) return false

    return app.makeSingleInstance(function() {
        if (mainWindow) {
            if (mainWindow.isMinimized()) mainWindow.restore()
            mainWindow.focus()
        }
    })
}


// Handle Squirrel on Windows startup events
switch (process.argv[1]) {
    case '--squirrel-obsolete':
    case '--squirrel-updated':
        app.quit()
        break
    default:
        initialize()
}