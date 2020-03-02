// 진도 페이지
var SVG = Snap('#my-svg');


// 최상위 그룹
var Paper = SVG.g();


//이미지
var login = Paper.image('../img/login.png', 0, 0, 30, 45).toDefs();
var book = Paper.image('../img/book.png', 0, 0, 25, 25).toDefs();


// SVG 외곽선
Paper.rect(0, 0, 800, 600, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

var topBox = Paper.g();

topBox.path('M1 40 L799 40 L799 0 Q798 1 798 1 L1 1').attr({
  'fill': '#d3e7b9'
});

topBox.rect(11, 6, 32, 28).click(handler).attr({
  'fill': '#d3e7b9',
  'cursor': 'pointer'
});

for (var i = 0; i < 3; i++) {
  topBox.line(15, 13 + (i * 8), 40, 13 + (i * 8)).click(handler).attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
}

function handler() {
  location.replace('bon_03-8.html');
}

// 상단
var topArea = Paper.g();
login.use().transform('t30, 50').appendTo(topArea);

var t1 = topArea.text(65, 80, ['김태은', '님은', '나01', '세트를 학습중입니다.']).attr({
  'font-size': 15,
  'font-weight': 'bold'
});
t1.selectAll('tspan')[1].attr({
  x: 110,
  'font-weight': 'normal'
});
t1.selectAll('tspan')[2].attr({
  x: 143,
  'font-weight': 'weight'
});
t1.selectAll('tspan')[3].attr({
  x: 173,
  'font-weight': 'normal'
});


// 하단
var bottomArea = Paper.g();
bottomArea.path('M50,110 L225,110 A18,18 0 0,1 245,130 L245,150 L30,150 L30,130 A18,18 0 0,1 50,110').attr({
  'fill': '#c3d8d8'
});

bottomArea.path('M270,110 L445,110 A18,18 0 0,1 465,130 L465,150 L250,150 L250,130 A18,18 0 0,1 270,110').click(handler01).attr({
  'fill': '#ffe2c5'
});

bottomArea.text(95, 133, '재능스스로한자').attr({
  'font-size': 14,
  'font-weight': 'bold',
  'cursor': 'pointer'
});

bottomArea.text(335, 133, '급수시험').click(handler01).attr({
  'font-size': 14,
  'fill': 'gray',
  'cursor': 'pointer'
});

bottomArea.rect(30, 145, 760, 400).attr({
  'fill': 'white'
});
bottomArea.line(30, 145, 760, 145).attr({
  'stroke': 'gray'
});

///////////////////////////////////////////

bottomArea.line(150, 155, 150, 360).attr({
  'stroke': 'gray'
});
bottomArea.line(320, 155, 320, 360).attr({
  'stroke': 'gray'
});

var t2 = bottomArea.text(80, 175, ['점검', '세트', '메뉴']).attr({
  'font-size': 15,
  'font-weight': 'bold'
});
t2.selectAll('tspan')[1].attr({
  x: 225
});
t2.selectAll('tspan')[2].attr({
  x: 520
});

var set = ['나 001', '나 002', '나 R01', '나 003'];
for (var i = 0; i < set.length; i++) {
  bottomArea.line(30, (i * 45) + 190, 760, (i * 45) + 190).attr({
    'stroke': 'gray'
  });
  bottomArea.rect(80, (i * 45) + 203, 20, 20, 5).attr({
    'fill': 'white',
    'stroke': 'gray'
  });
  bottomArea.text(218, (i * 45) + 219, set[i]).attr({
    'font-size': 14
  });
}
bottomArea.rect(80, 203, 20, 20, 5).click(handler02).attr({
  'fill': 'white',
  'stroke': 'gray',
  'cursor': 'pointer'
});

var setT = ['Q', 'Q', 'G', 'Q'];
for (var i = 0; i < setT.length; i++) {
  bottomArea.circle(420, 212 + (i * 45), 15).attr({
    'fill': '#ccffcc',
    'stroke': 'black',
    'cursor': 'pointer'
  });
  bottomArea.text(415, 217 + (i * 45), 'C').attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
  bottomArea.circle(535, 210 + (i * 45), 15).attr({
    'fill': '#ffd9fa',
    'stroke': 'black',
    'cursor': 'pointer'
  });
  bottomArea.text(530, 215 + (i * 45), setT[i]).attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
  bottomArea.circle(650, 212 + (i * 45), 15).attr({
    'fill': '#ffe6eb',
    'stroke': 'black',
    'cursor': 'pointer'
  });
  bottomArea.text(643, 218 + (i * 45), 'W').attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
}

// 본세트 카드
var circleF = bottomArea.circle(420, 212, 15).attr({
  'fill': '#ccffcc',
  'stroke': 'black'
});
var circleT = bottomArea.text(415, 218, 'C').attr({
  'stroke': 'black'
});
var circle3 = bottomArea.g(circleF, circleT).click(handler03).attr({
  'cursor': 'pointer'
});


// 본세트 퀴즈
var circleFF = bottomArea.circle(535, 210, 15).attr({
  'fill': '#ffd9fa',
  'stroke': 'black',
  'cursor': 'pointer'
});
var circleTT = bottomArea.text(530, 215, 'Q').attr({
  'stroke': 'black',
  'cursor': 'pointer'
});
var circle4 = bottomArea.g(circleFF, circleTT).click(handler04).attr({
  'cursor': 'pointer'
});

// 본세트 쓰기
var circleWW = bottomArea.circle(650, 212, 15).attr({
  'fill': '#ffe6eb',
  'stroke': 'black',
  'cursor': 'pointer'
});
var circleWT = bottomArea.text(643, 218, 'W').attr({
  'stroke': 'black',
  'cursor': 'pointer'
});
var circleWWWT = bottomArea.g(circleWW, circleWT).click(handler09).attr({
  'cursor': 'pointer'
});

// 활용세트 카드
var circleG = bottomArea.circle(420, 302, 15).attr({
  'fill': '#ccffcc',
  'stroke': 'black',
  'cursor': 'pointer'
});
var circleGT = bottomArea.text(415, 308, 'C').attr({
  'stroke': 'black',
  'cursor': 'pointer'
});
var circle5 = bottomArea.g(circleG, circleGT).click(handler08).attr({
  'cursor': 'pointer'
});

// green G
var circleG = bottomArea.circle(535, 300, 15).attr({
  'fill': '#d4fafa',
  'stroke': 'black',
  'cursor': 'pointer'
});
var circleGT = bottomArea.text(530, 305, 'G').attr({
  'stroke': 'black',
  'cursor': 'pointer'
});
var circle5 = bottomArea.g(circleG, circleGT).click(handler05).attr({
  'cursor': 'pointer'
});


// 총정리 R
var squareF = bottomArea.rect(405, 518, 28, 28, 5).attr({
  'fill': '#faf4c0',
  'stroke': 'black'
});
var squareT = bottomArea.text(415, 538, 'R').attr({
  'stroke': 'black'
});
var square6 = bottomArea.g(squareF, squareT).click(handler06).attr({
  'cursor': 'pointer'
});



for (var i = 0; i < 3; i++) {
  bottomArea.circle(380, (i * 15) + 375, 1).attr({
    'stroke': 'black'
  });
}

bottomArea.line(150, 410, 150, 545).attr({
  'stroke': 'gray'
});
bottomArea.line(320, 410, 320, 545).attr({
  'stroke': 'gray'
});

var set2 = ['나 020', '나 R10', '나 총02'];
for (var i = 0; i < set2.length; i++) {
  bottomArea.line(30, (i * 45) + 420, 760, (i * 45) + 420).attr({
    'stroke': 'gray'
  });
  bottomArea.rect(80, (i * 45) + 430, 20, 20, 5).attr({
    'fill': 'white',
    'stroke': 'gray'
  });
  bottomArea.text(218, (i * 45) + 446, set2[i]).attr({
    'font-size': 14
  });
}

var setTT = ['Q', 'G'];
for (var i = 0; i < 2; i++) {
  bottomArea.circle(420, 443 + (i * 45), 15).attr({
    'fill': '#ccffcc',
    'stroke': 'black',
    'cursor': 'pointer'
  });
  bottomArea.text(415, 449 + (i * 45), 'C').attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
  bottomArea.circle(535, 443 + (i * 45), 15).attr({
    'fill': '#ffd9fa',
    'stroke': 'black',
    'cursor': 'pointer'
  });
  bottomArea.text(530, 449 + (i * 45), setTT[i]).attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
  bottomArea.circle(650, 443 + (i * 45), 15).attr({
    'fill': '#ffe6eb',
    'stroke': 'black',
    'cursor': 'pointer'
  });
  bottomArea.text(643, 449 + (i * 45), 'W').attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
}

bottomArea.circle(535, 488, 15).attr({
  'fill': '#d4fafa',
  'stroke': 'black',
  'cursor': 'pointer'
});
bottomArea.text(530, 494, 'G').attr({
  'stroke': 'black',
  'cursor': 'pointer'
});

// 교재분류표 아이콘
bottomArea.circle(730, 560, 20).attr({
  'fill': 'Moccasin'
});
book.use().transform('t717, 547').click(handler07).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});


function handler01() { // 급수한자
  location.replace('gub_01.html');
}

function handler02() { // 점검(check) OK
  bottomArea.text(85, 219, 'V').attr({
    'stroke': 'tomato'
  });
  setTimeout(function() {
    location.replace('bon_03C.html');
  }, 400);
}

function handler03() { // C: 본교재 카드 OK
  bottomArea.circle(420, 212, 15).attr({
    'fill': '#ccffcc',
    'stroke': 'black'
  });
  bottomArea.text(415, 218, 'C').attr({
    'stroke': 'black'
  });
  setTimeout(function() {
    location.replace('bon_03BC.html');
  }, 400);
}

function handler04() { // Q: 본교재 퀴즈 OK
  bottomArea.circle(535, 210, 15).attr({
    'fill': '#ffd9fa',
    'stroke': 'black',
    'cursor': 'pointer'
  });
  bottomArea.text(530, 215, 'Q').attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
  setTimeout(function() {
    location.replace('bon_03BQ.html');
  }, 400);
}
//
function handler08() { // C: 활용교재 카드 OK
  bottomArea.circle(420, 302, 15).attr({
    'fill': '#ccffcc',
    'stroke': 'black',
    'cursor': 'pointer'
  });
  bottomArea.text(415, 308, 'C').attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
  setTimeout(function() {
    location.replace('hwal_01.html');
  }, 400);
}

function handler05() { // G: 활용교재 게임 OK
  bottomArea.circle(535, 300, 15).attr({
    'fill': '#d4fafa',
    'stroke': 'black',
    'cursor': 'pointer'
  });
  bottomArea.text(530, 305, 'G').attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
  setTimeout(function() {
    location.replace('hwal_03.html');
  }, 400);
}

function handler06() { // R: 총정리 OK
  bottomArea.rect(405, 518, 28, 28, 5).attr({
    'fill': '#faf4c0',
    'stroke': 'black'
  });
  bottomArea.text(415, 538, 'R').attr({
    'stroke': 'black'
  });
  setTimeout(function() {
    location.replace('chong_01.html');
  }, 400);
}

function handler09() { //본교재 쓰기 OK
  location.replace('bon_03W.html');
}

function handler07() { //교재분류표(table) OK
  location.replace('bon_03T.html');
}
