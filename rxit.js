module.exports = function rxit(spec,func)
{
	it(spec,function(done)
	{
		func().subscribe(function(){},function(err){if (err.message) done.fail(err.message); else done.fail(JSON.stringify(err));},function(){done();});
	})
}