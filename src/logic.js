function valueToIcon(dataShow, icons){
  if(dataShow < 0){
    var dataShow = '<i class="fa ' + icons[0] + '" aria-hidden="true"></i>'
  }
  if(dataShow > 0){
    var dataShow = '<i class="fa ' + icons[1] + '" aria-hidden="true"></i>'
  }
  if(dataShow == 0){
    var dataShow = '<i class="fa ' + icons[2] + '" aria-hidden="true"></i>'
  }
  if(data == undefined){
    var dataShow = '<i class="fa fa-question-circle" aria-hidden="true"></i>'
  }
  return dataShow
}

iconsUpDown = ["fa-arrow-down", "fa-arrow-up", "fa-arrows-h"]
iconsSuccessFailure = ["fa-check-square", "fa-times", "fa-meh-o"]

function generateChunk(whereAppend, variables, listeningSession, convertToIcon, icons){
  var first = document.getElementById(whereAppend)
  for(k in variables){
    var line = document.createElement("div");
    line.setAttribute("id", "line")
    var element = document.createElement("h2");
    var dataShow = data[listeningSession][variables[k]];
    if(convertToIcon){
      var dataShow = valueToIcon(dataShow, icons)
    }     
    element.innerHTML = dataShow;
    line.appendChild(element);
    first.appendChild(line);
  }
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const session = urlParams.get('session')

generateChunk("MusicVariables", ["InitEndSong", "InitEndArtist"], session, false)
generateChunk("Variables", ["MoodText", "ValenceText", "ArousalText"], session, false)
generateChunk("Aim", ["ValenceAim", "ArousalAim", "MoodAim"], session, true, iconsUpDown)
generateChunk("Success", ["ValenceSuccess", "ArousalSuccess", "MoodSuccess"], session, true, iconsSuccessFailure)

generateChunk("suitability", ["SuitableText"], session, true, iconsSuccessFailure)
generateChunk("success", ["ReasonSuccess"], session, true, iconsSuccessFailure)
generateChunk("complete", ["Strat2"], session, true, iconsSuccessFailure)

generateChunk("activity", ["Activity"], session)
generateChunk("reason", ["Reason"], session)
generateChunk("strategy", ["Strat2"], session)
