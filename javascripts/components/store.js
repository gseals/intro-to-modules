const printToDom = (divId, toPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = toPrint;
};

const makeStore = () => {
    const domString = 'hi new store';
    printToDom('store-container',domString);
};
makeStore();

// export dafault { makeStore: makeStore };
export default { makeStore };

// export default { anObject };