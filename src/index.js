const { Client } = require('discord-rpc');
const window = require('active-win');

/**
 * @class
 */
class FBI {
    /**
     * @param {Array<String>} classified An array of process names to hide the title of (sensitive data reasons, included: WinSCP.exe && putty.exe)
     */
    constructor(classified = []) {
        this._clientID = '628652359232389132';
        this.RPC = null;

        this.classified = ['WinSCP.exe', 'putty.exe'];
        if (typeof classified === 'string') this.classified.push(classified);
        else this.classified.push(...classified);
        this._init();
    }

    _init() {
        this.RPC = new Client({ transport: "ipc" });
        this.RPC.login({ clientId: this._clientID });
        this.RPC.on('ready', () => console.log(`Logged in for ${this.RPC.user.username}`));

        setInterval(() => {
            this.updateRPC()
        }, 500);
    }

    async updateRPC() {
        const active = await window();
        if (!active) return this.RPC.setActivity({
            details: "They're up to something.",
            largeImageKey: 'main',
            largeImageText: "We're watching.",
            smallImageKey: 'eyes'
        });

        if (this.classified.includes(active.owner.name)) active.title = 'Classified.'

        this.RPC.setActivity({
            details: active.title,
            state: `${active.owner.name}`,
            largeImageKey: 'main',
            largeImageText: "We're watching.",
            smallImageKey: 'eyes'
        })
    }
}

module.exports = FBI;