/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { extendedDayjs } from '../../utils/dates';
import { Timer, TimerProps } from '.';

export default {
  title: 'Components/Timer',
  component: Timer,
};

export const InteractiveTimer = (args: TimerProps) => <Timer {...args} />;

InteractiveTimer.args = {
  isRunning: false,
};

InteractiveTimer.argTypes = {
  startTime: {
    defaultValue: extendedDayjs().utc().valueOf(),
    table: {
      disable: true,
    },
  },
  endTime: {
    table: {
      disable: true,
    },
  },
  status: {
    control: {
      type: 'select',
    },
    options: [
      'success',
      'warning',
      'danger',
      'info',
      'default',
      'primary',
      'secondary',
    ],
  },
};

InteractiveTimer.parameters = {
  actions: {
    disabled: true,
  },
};
