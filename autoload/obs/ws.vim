
function obs#ws#new() abort
	call denops#request('obs', 'new', [])
endfunction

function obs#ws#connect(url, password) abort
	call denops#request('obs', 'connect', [a:url, a:password])
	doautocmd User OBS:Connected
endfunction

function obs#ws#disconnect() abort
	call denops#request('obs', 'disconnect', [])
	doautocmd User OBS:DisConnected
endfunction

function obs#ws#identified() abort
	return denops#request('obs', 'identified', [])
endfunction

function obs#ws#call(requestType, requestData) abort
	return denops#request('obs', 'call', [a:requestType, a:requestData])
endfunction
