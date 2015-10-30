var tape = require("tape"),
    vec3 = require("vec3"),
    aabb3ToAabb3 = require("..");


tape("aabb3ToAabb3(minx1, miny1, maxx1, maxy1, minx2, miny2, maxx2, maxy2)", function(assert) {
    assert.deepEqual(aabb3ToAabb3(
        0, 0, 0, 1, 1, 1,
        0.5, 0.5, 0.5, 1.5, 1.5, 1.5
    ), {
        point: vec3.create(0.5, 0.5, 0.5),
        normal: vec3.create(0.5773502588272095, 0.5773502588272095, 0.5773502588272095),
        depth: 0.8660254037844386,
        data: null
    });
    assert.equal(aabb3ToAabb3(
        0, 0, 0, 1, 1, 1,
        1, 1, 1, 2, 2, 2
    ), false);
    assert.end();
});
