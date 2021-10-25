// save classification information
import fs from "fs";

interface ClassificationBasicInfo {
    urlPath: string;
    name: string;
}

export interface ClassificationInfo extends ClassificationBasicInfo {
    files: fs.Dirent[];
}

const classificationInfo: {[key: string]: ClassificationBasicInfo} = {
    css: {
        urlPath: "css",
        name: "css"
    }
};

export default classificationInfo;
