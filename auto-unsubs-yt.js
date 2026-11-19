(async () => {    
    const delay = (ms) => new Promise(res => setTimeout(res, ms));
    let count = 0;

    const subButtons = document.querySelectorAll('ytd-channel-renderer ytd-subscribe-button-renderer button');

    for (const btn of subButtons) {
        if (btn.innerText.includes('Subscribed') || btn.getAttribute('aria-label')?.includes('Unsubscribe')) {
            btn.click();
            await delay(600);

            const confirmBtn = document.querySelector('yt-confirm-dialog-renderer #confirm-button button');
            if (confirmBtn) {
                confirmBtn.click();
                count++;
                console.log(`Berhasil unsubscribe ke-${count}`);
                await delay(1000);
            }
        }
    }
    console.log(`Selesai! Total ${count} channel telah di-unsubscribe.`);
})();
