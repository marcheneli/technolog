/// <reference path="../../../typings/tsd.d.ts" />

import * as Flux from "flux";

let Dispatcher: Flux.Dispatcher<AppPayload> = new Flux.Dispatcher();

export default Dispatcher;