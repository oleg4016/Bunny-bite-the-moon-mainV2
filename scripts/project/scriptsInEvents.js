const scriptsInEvents = {

	async Prescreen_Event28_Act1(runtime, localVars)
	{
		YaGames
		.init()
		.then(ysdk => {
		runtime.globalVars.language = ysdk.environment.i18n.lang;
		});
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

