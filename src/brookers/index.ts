export type brookers__timeline_op_T =
	|{ type:'html', title:string, bullet:'default'|'video', html:string }
	|{ type:'youtube', title:string, bullet:'video', videoId:string }
