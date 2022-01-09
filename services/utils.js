
const toolsKit = {
    orderBy: (objectList, field, desc = true) => {
        if (!objectList.length) {
            return objectList;
        }
        const orderedObjectList = objectList
            .sort((a, b) => a[field].toString().localeCompare(b[field].toString()));
        if (desc) {
            return orderedObjectList;
        }
        return orderedObjectList.reverse();
    },
};

module.exports = {
    toolsKit
}