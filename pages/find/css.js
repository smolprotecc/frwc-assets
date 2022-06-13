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
  display        : flex;
  flex-wrap      : wrap;
  justify-content: center;
  align-items    : center;
  align-content  : center;
}
#content {
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
  border         : 3px solid rgba(255,255,255,0.07);
  border-radius  : 3px;
  backdrop-filter: blur(6px);
  margin         : 2px;
  transition     : all 250ms ease-out;
  transform      : scale(0.94);
  perspective    : 600px;
}
.warrior-tile:hover {
  position : relative;
  border   : 3px solid rgba(255,255,255,0.27);
  transform: scale(1.1);
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
  left         : 50%;
  width        : calc(100% - 15%*2);
  height       : 44px;
  font-size    : 15pt;
  text-align   : right;
  color        : rgba(211,211,211, 0.88);
  padding-right: 2.2ch;
  line-height  : 44px;
  transform    : translate(-50%, 0%);
}
.mute {
  filter: opacity(0.67);
}
`
