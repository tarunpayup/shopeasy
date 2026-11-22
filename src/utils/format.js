import { CURRENCY_SYMBOL } from "../constants/config";
export const formatTime = (totalSeconds) =>{
    const minutes = Math.floor(totalSeconds/60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${String(seconds).padStart(2,'0')}`; //120 -> 2:00, 49 -> 0:49
}

export const getInitials = (name = '') => {
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if(parts.length === 0) return '?';
    const first = parts[0][0];
    const last = parts.length>1 ? parts[parts.length - 1][0] : '';
    return (first + last).toUpperCase();
}

export const discountPercent = (price,oldPrice) =>{
    if(!oldPrice || oldPrice<= price) return 0;
    return Math.round(((oldPrice-price)/oldPrice)*100);
};

export const formatCurrency = (amount) =>{
    const withCommas = String(amount).replace(/\B(?=(\d{3}+(?!\d)))/g,',');
    return `${CURRENCY_SYMBOL}${withCommas}`;
};