var mathf = require("mathf"),
    vec3 = require("vec3"),
    Contact3 = require("contact3");


module.exports = function aabb3ToAabb3(minx1, miny1, minz1, maxx1, maxy1, maxz1, minx2, miny2, minz2, maxx2, maxy2, maxz2) {
    var x, y, z, dsq, d, invD;

    if (minx2 > minx1) {
        x = minx2 - maxx1;
    } else {
        x = minx1 - maxx2;
    }

    if (miny2 > miny1) {
        y = miny2 - maxy1;
    } else {
        y = miny1 - maxy2;
    }

    if (minz2 > minz1) {
        z = minz2 - maxz1;
    } else {
        z = minz1 - maxz2;
    }

    if (x < 0.0 && y < 0.0 && z < 0.0) {
        contact = Contact3.create();

        dsq = vec3.lengthSqValues(x, y, z);
        d = mathf.sqrt(dsq);
        invD = 1 / d;

        vec3.set(contact.point, maxx1 + x, maxy1 + y, maxz1 + z);
        vec3.set(contact.normal, x * -invD, y * -invD, z * -invD);
        contact.depth = d;

        return contact;
    } else {
        return false;
    }
};
