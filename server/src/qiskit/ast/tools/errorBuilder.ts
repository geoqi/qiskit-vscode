/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

import { VisitableItem } from '../types';
import { ParserError, ParseErrorLevel } from '../../../types';

export namespace ErrorBuilder {
    export function warning(message: string, item: VisitableItem): ParserError {
        return {
            line: item.start.line,
            start: item.start.column,
            end: item.end.column,
            message,
            level: ParseErrorLevel.WARNING
        };
    }
}
