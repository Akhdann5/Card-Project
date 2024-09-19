function convertToNumber(str) {
    let multiplier = 1;
    if (str.includes('k')) {
        multiplier = 1000;
        str = str.replace('k', '');
    }
    return parseFloat(str) * multiplier;
}

function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num;
}

document.querySelectorAll('.lcs-content').forEach(item => {
    item.addEventListener('click', function() {
        let countElement = this.querySelector('.count');
        let currentCount = convertToNumber(countElement.innerText);
        
        if (this.classList.contains('active')) {
            currentCount -= 1;
            this.classList.remove('active');
        } 
        else {
            currentCount += 1;
            this.classList.add('active');
        }

        countElement.innerText = formatNumber(currentCount);
    });
});
