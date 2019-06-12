export const Config = {
    serverEndpoint: (() => {
        const dev = null; // fix this is only temporary
        switch (dev) {
            case 'prod':
                return 'url';
            default:
                return 'http://localhost:8080/'
        };
    })(),
}