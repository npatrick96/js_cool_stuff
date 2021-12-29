import { print as p, log as l} from "./module-text-helpers.js"; 
// import { print, log } from "./module-text-helpers.js"; 
// import * as fns from "./module-text-helpers.js"; 
import freel from "./class-using-es6-syntax.js";

p("printing a message");
l("logging a message", new Date());

freel.print();