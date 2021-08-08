const teardown = async () => {
    await globalThis._databaseInstance.stop();
};

module.exports = teardown;