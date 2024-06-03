const CAR_SHARE = {
    name: 'CAR_SHARE',
    minuteRate: 0.49,
    hourRate: 17.99,
    dayRate: 104.99,
    accessFee: 1.25,

    isPvrtCharged: true
}

const EBIKE_SHARE = {
    name: 'EBIKE_SHARE',
    minuteRate: 0.35,
    hourRate: 12.99,
    accessFee: 1.25,

    isPvrtCharged: false
}
export const ServiceTypes = Object.freeze({
    CAR_SHARE:   CAR_SHARE,
    EBIKE_SHARE:  EBIKE_SHARE
});
