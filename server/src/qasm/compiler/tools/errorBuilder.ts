// Copyright 2018 IBM RESEARCH. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// =============================================================================

'use strict';

import { ParserError, ParseErrorLevel } from '../../../types';
import { ContentPosition } from '../types';

export namespace ErrorBuilder {
    export function error(message: string, position: ContentPosition): ParserError {
        return {
            line: position.line,
            start: position.start,
            end: position.end,
            message: message,
            level: ParseErrorLevel.ERROR
        };
    }

    export function warning(message: string, position: ContentPosition): ParserError {
        return {
            line: position.line,
            start: position.start,
            end: position.end,
            message: message,
            level: ParseErrorLevel.WARNING
        };
    }
}
