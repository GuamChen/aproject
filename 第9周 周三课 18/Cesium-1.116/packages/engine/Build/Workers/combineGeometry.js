/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.116
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import {
  PrimitivePipeline_default
} from "./chunk-M2AYBTNH.js";
import {
  createTaskProcessorWorker_default
} from "./chunk-RMOEYCZW.js";
import "./chunk-DPUSFA7S.js";
import "./chunk-P2YAAMT2.js";
import "./chunk-E6WXPSJS.js";
import "./chunk-Z7FQLK6N.js";
import "./chunk-L4BW3RUA.js";
import "./chunk-NP2GYYE5.js";
import "./chunk-P4XKB3QZ.js";
import "./chunk-EOXYZ34O.js";
import "./chunk-2ZBL3MVO.js";
import "./chunk-7COR472O.js";
import "./chunk-2KACWKS4.js";
import "./chunk-X6XOMPWL.js";
import "./chunk-2XPLH3JY.js";
import "./chunk-NZWNZA6S.js";
import "./chunk-ADOVHYWO.js";
import "./chunk-QCQUZGXI.js";
import "./chunk-I37B3MZ2.js";
import "./chunk-N4KXMWQU.js";
import "./chunk-TZORKRNK.js";
import "./chunk-SS4ESNE3.js";
import "./chunk-YDVSBWEO.js";

// packages/engine/Source/Workers/combineGeometry.js
function combineGeometry(packedParameters, transferableObjects) {
  const parameters = PrimitivePipeline_default.unpackCombineGeometryParameters(
    packedParameters
  );
  const results = PrimitivePipeline_default.combineGeometry(parameters);
  return PrimitivePipeline_default.packCombineGeometryResults(
    results,
    transferableObjects
  );
}
var combineGeometry_default = createTaskProcessorWorker_default(combineGeometry);
export {
  combineGeometry_default as default
};
