/**
 * Handcrafted pure monochrome Lottie (Bodymovin v5.7.4) vector animation payloads.
 * Self-contained JSON ensures instant zero-latency rendering and guaranteed offline availability.
 */

// 1. Hero Abstract Kinetic Orbital Geometry — rotating precision rings, counter-rotating dashed arc, breathing core
export const heroOrbitalLottie = {
  v: '5.7.4',
  fr: 60,
  ip: 0,
  op: 360,
  w: 400,
  h: 400,
  nm: 'HeroOrbitalMonochrome',
  ddd: 0,
  assets: [],
  layers: [
    // Outer slow rotating dashed ring
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'OuterDashedRing',
      sr: 1,
      ks: {
        o: { a: 0, k: 38 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [0], e: [360] },
            { t: 360, s: [360] },
          ],
        },
        p: { a: 0, k: [200, 200, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'RingGroup',
          it: [
            {
              ty: 'el',
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [340, 340] },
              d: 1,
            },
            {
              ty: 'st',
              c: { a: 0, k: [0, 0, 0, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 1 },
              lc: 2,
              lj: 1,
              d: [
                { n: 'd', nm: 'dash', v: { a: 0, k: 4 } },
                { n: 'g', nm: 'gap', v: { a: 0, k: 14 } },
              ],
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 360,
      st: 0,
    },
    // Tilted Meridian Ellipse 1
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: 'MeridianOne',
      sr: 1,
      ks: {
        o: { a: 0, k: 55 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [0], e: [-360] },
            { t: 360, s: [-360] },
          ],
        },
        p: { a: 0, k: [200, 200, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'EllipseGroup1',
          it: [
            {
              ty: 'el',
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [280, 118] },
              d: 1,
            },
            {
              ty: 'st',
              c: { a: 0, k: [0, 0, 0, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 1.2 },
              lc: 2,
              lj: 1,
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 25 },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 360,
      st: 0,
    },
    // Tilted Meridian Ellipse 2
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: 'MeridianTwo',
      sr: 1,
      ks: {
        o: { a: 0, k: 32 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [60], e: [420] },
            { t: 360, s: [420] },
          ],
        },
        p: { a: 0, k: [200, 200, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'EllipseGroup2',
          it: [
            {
              ty: 'el',
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [280, 118] },
              d: 1,
            },
            {
              ty: 'st',
              c: { a: 0, k: [0.2, 0.2, 0.2, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 1 },
              lc: 2,
              lj: 1,
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: -35 },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 360,
      st: 0,
    },
    // Orbiting Satellite Node 1
    {
      ddd: 0,
      ind: 4,
      ty: 4,
      nm: 'OrbitNode',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [0], e: [360] },
            { t: 180, s: [360], e: [720] },
            { t: 360, s: [720] },
          ],
        },
        p: { a: 0, k: [200, 200, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Satellite',
          it: [
            {
              ty: 'el',
              p: { a: 0, k: [110, 0] },
              s: { a: 0, k: [7, 7] },
              d: 1,
            },
            {
              ty: 'fl',
              c: { a: 0, k: [0, 0, 0, 1] },
              o: { a: 0, k: 100 },
            },
            {
              ty: 'el',
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [220, 220] },
              d: 1,
            },
            {
              ty: 'st',
              c: { a: 0, k: [0, 0, 0, 1] },
              o: { a: 0, k: 22 },
              w: { a: 0, k: 1 },
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 360,
      st: 0,
    },
    // Center Architectural Square (rotating precision diamond)
    {
      ddd: 0,
      ind: 5,
      ty: 4,
      nm: 'CenterDiamond',
      sr: 1,
      ks: {
        o: { a: 0, k: 90 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [45], e: [135], o: { x: [0.42], y: [0] }, i: { x: [0.58], y: [1] } },
            { t: 180, s: [135], e: [225], o: { x: [0.42], y: [0] }, i: { x: [0.58], y: [1] } },
            { t: 360, s: [225] },
          ],
        },
        p: { a: 0, k: [200, 200, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [92, 92, 100], e: [108, 108, 100], o: { x: [0.4], y: [0] }, i: { x: [0.6], y: [1] } },
            { t: 180, s: [108, 108, 100], e: [92, 92, 100], o: { x: [0.4], y: [0] }, i: { x: [0.6], y: [1] } },
            { t: 360, s: [92, 92, 100] },
          ],
        },
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'SquareFrame',
          it: [
            {
              ty: 'rc',
              d: 1,
              s: { a: 0, k: [56, 56] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 0 },
            },
            {
              ty: 'st',
              c: { a: 0, k: [0, 0, 0, 1] },
              o: { a: 0, k: 90 },
              w: { a: 0, k: 1.5 },
            },
            {
              ty: 'el',
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [8, 8] },
              d: 1,
            },
            {
              ty: 'fl',
              c: { a: 0, k: [0, 0, 0, 1] },
              o: { a: 0, k: 100 },
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 360,
      st: 0,
    },
  ],
};

// 2. About Section Architectural Blueprint Lottie — nested geometric frames breathing in sequence
export const aboutArchitectureLottie = {
  v: '5.7.4',
  fr: 60,
  ip: 0,
  op: 240,
  w: 240,
  h: 240,
  nm: 'AboutArchitectureMonochrome',
  ddd: 0,
  assets: [],
  layers: [0, 1, 2, 3].map((idx) => {
    const size = 176 - idx * 36;
    const startRot = idx * 15;
    return {
      ddd: 0,
      ind: idx + 1,
      ty: 4,
      nm: `Frame_${idx}`,
      sr: 1,
      ks: {
        o: { a: 0, k: 28 + idx * 20 },
        r: {
          a: 1,
          k: [
            {
              t: 0,
              s: [startRot],
              e: [startRot + (idx % 2 === 0 ? 90 : -90)],
              o: { x: [0.42], y: [0] },
              i: { x: [0.58], y: [1] },
            },
            {
              t: 120,
              s: [startRot + (idx % 2 === 0 ? 90 : -90)],
              e: [startRot + (idx % 2 === 0 ? 180 : -180)],
              o: { x: [0.42], y: [0] },
              i: { x: [0.58], y: [1] },
            },
            { t: 240, s: [startRot + (idx % 2 === 0 ? 180 : -180)] },
          ],
        },
        p: { a: 0, k: [120, 120, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Square',
          it: [
            {
              ty: 'rc',
              d: 1,
              s: { a: 0, k: [size, size] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 0 },
            },
            {
              ty: 'st',
              c: { a: 0, k: [0, 0, 0, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: idx === 3 ? 1.5 : 1 },
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 240,
      st: 0,
    };
  }),
};

// 3. Contact Section Signal Wave Lottie — radiating monochrome ripples + focal node
export const contactSignalLottie = {
  v: '5.7.4',
  fr: 60,
  ip: 0,
  op: 180,
  w: 220,
  h: 220,
  nm: 'ContactSignalMonochrome',
  ddd: 0,
  assets: [],
  layers: [
    ...[0, 60, 120].map((offset, idx) => ({
      ddd: 0,
      ind: idx + 1,
      ty: 4,
      nm: `Wave_${idx}`,
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [75], e: [0], o: { x: [0.2], y: [0] }, i: { x: [0.8], y: [1] } },
            { t: 180, s: [0] },
          ],
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [110, 110, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [12, 12, 100], e: [100, 100, 100], o: { x: [0.15], y: [0.85] }, i: { x: [0.4], y: [1] } },
            { t: 180, s: [100, 100, 100] },
          ],
        },
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Ring',
          it: [
            {
              ty: 'el',
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [190, 190] },
              d: 1,
            },
            {
              ty: 'st',
              c: { a: 0, k: [0, 0, 0, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 1.2 },
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 180,
      st: -offset,
    })),
    {
      ddd: 0,
      ind: 5,
      ty: 4,
      nm: 'CoreDot',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [110, 110, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Core',
          it: [
            {
              ty: 'el',
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [12, 12] },
              d: 1,
            },
            {
              ty: 'fl',
              c: { a: 0, k: [0, 0, 0, 1] },
              o: { a: 0, k: 100 },
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 180,
      st: 0,
    },
  ],
};
