const addCSS = function(rule, container, ruleIdentifier) {
  let rc = ruleIdentifier ? ruleIdentifier : 'customCSS'
  let output = '<span class="' + rc + '" style="display:none;">&shy;<style>' + rule + '</style></span>'
  document.querySelectorAll(rc).forEach(e => e.remove())
  if (container) {
    document.querySelector(container).insertAdjacentHTML('beforeend', output)
  } else {
    document.body.insertAdjacentHTML('beforeend', output)
  }
}

const CSSRules = `
body {
  background     : rgba( 24, 24, 44, 1 );
}
#content {
  display        : flex;
  flex-wrap      : wrap;
  justify-content: center;
  align-items    : center;
  align-content  : center;
  position  : absolute;
  top       : 0%;
  left      : 0%;
  width     : 100%;
  height    : 100%;
  overflow-y: scroll;
}
.warrior-tile {
  position       : relative;
  display        : inline-block;
  margin         : 2px;
  perspective    : 600px;
  z-index        : 1;
  transition     : all 250ms ease-out;
}
.warrior-tile:hover {
  position : relative;
  z-index  : 25;
  /* transform: scale(1.22); */
}
.warrior-tile canvas {
  backdrop-filter: blur(6px);
  border-radius: 3px;
  border : 3px solid rgba(255,255,255,0.07);
  border-top: 7px solid rgba(255,255,255,0.07);
  border-bottom: 7px solid rgba(255,255,255,0.07);
}
.warrior-tile:hover canvas {
  border : 3px solid rgba(255,255,255,0.27);
  border-top: 7px solid rgba(255,255,255,0.27);
  border-bottom: 7px solid rgba(255,255,255,0.27);
}
.warrior-tile,
.warrior-tile canvas {
  transition     : all 120ms ease-out;
}
#search-bar {
  position       : absolute;
  bottom         : 31px;
  left           : 50%;
  width          : calc(100% - 15%*2);
  height         : 31px;
  border-radius  : 15px;
  background     : rgba(255,255,255,0.08);
  backdrop-filter: blur(6px);
  z-index        : 50;
  transform      : translate(-50%, 0%);
}
#input {
  background : none;
  border     : none;
  outline    : none;
  resize     : none;
  
  position   : absolute;
  top        : 0%;
  left       : calc(0% + 2em);
  width      : calc(100% - 2em*2);
  height     : 100%;
  line-height: 26px;
  color      : rgba(211,211,211,1);
}
#info-bar {
  position     : absolute;
  bottom       : calc(31px + 31px + 0px);
  right        : calc(15%);
  height       : 44px;
  font-size    : 15pt;
  text-align   : right;
  color        : rgba(211,211,211, 0.88);
  padding-right: 2.2ch;
  padding-left : 2.2ch;
  line-height  : 44px;
  z-index      : 13;
  pointer-events: none;
  background   : rgba( 1, 1, 1, 0.27);
  backdrop-filter: blur(3px);
  border-radius: 4px;
}
.mute {
  filter: opacity(0.67);
}
`
