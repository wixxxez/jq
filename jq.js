function add (num){
    
    $('#ivent').val($('#ivent').val()+num)
}
$('#res').click(function(){
    $('#ivent').val("")
})
$("#cof").click(function(){
    var strings = $('#ivent').val()
    var stringer = strings.substring(0,strings.length-1)
   $('#ivent').val(stringer)
})
$('#rowna').click(function(){
    $('#ivent').val(eval($('#ivent').val()))
})
$('#ivent').keydown(function(){
    $('#bokc').css({"background-color":"blue"})
})