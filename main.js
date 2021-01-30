const { app, BrowserWindow, Menu, Notification, nativeImage } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        title: "LainanDesktop Online",
        icon: "icon/lainan_icon.png",
        width: 1024,
        minWidth: 480,
        height: 768,
        minHeight: 360,
        backgroundColor: "#2196f3",
        autoHideMenuBar: true
    });

    win.loadURL("https://lainan.one/app/");
    win.setMenu(new Menu.buildFromTemplate([
        {
            role: "help",
            submenu: [
                {
                    label: "TopPage",
                    click: async () => {
                        const { shell } = require('electron');
                        await shell.openExternal('https://lainan.one/');
                    }
                },
                {
                    label: "support",
                    submenu: [
                        {
                            label: "Discord",
                            click: async () => {
                                const { shell } = require('electron');
                                await shell.openExternal('https://discord.com/invite/FrRbqXWzpC');
                            }
                        },
                        {
                            label: "Email",
                            click: async () => {
                                const { shell } = require('electron');
                                await shell.openExternal('mailto:lainan.one@gmail.com');
                            }
                        }
                    ]
                }
            ]
        }
    ]));
    new Notification({
        title: 'Lainan',
        icon: nativeImage.createFromPath("icon/lainan.png"),
        body: '起動中だよ！'
    }).show();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    };
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    };
});
