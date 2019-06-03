const isValidZip = (zip = '') => {
    return zip.match(/^[0-9]{5}(?:-[0-9]{4})?$/);
};

export default isValidZip;
