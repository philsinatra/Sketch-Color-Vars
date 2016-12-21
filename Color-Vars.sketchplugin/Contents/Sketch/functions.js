/**
 * Display an alert message
 * @param  {string} title   The alert box title
 * @param  {string} message The message displayed in the alert box
 * @return {none}
 */
var alert = function(title, message) {
	var app = [NSApplication sharedApplication];
	[app displayDialog: message withTitle: title];
}


/**
 * GET first visible fill color value of selected element
 * @param  {string} layer : the selected layer
 * @return {string} fill color value
 */
var firstVisibleFill = function(layer) {
  for (var i = 0; i < layer.style().fills().count(); i++) {
    var fill = layer.style().fills().objectAtIndex(i);
    if (fill.isEnabled()) {
      return fill;
    }
  }
  return false;
};


/**
 * Write a file to the user's preferred location
 * @param  {string} string : text to be written in the file
 * @param  {string} ext : file extension
 * @return {none}
 */
var writeFile = function(string, ext) {
  var output = [@"" stringByAppendingString:string];
  var path = file_path + '_colors.' + ext;
  [output writeToFile:path atomically:true encoding:NSUTF8StringEncoding error:null]
};
