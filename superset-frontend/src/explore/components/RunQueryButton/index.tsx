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

import { ReactNode } from 'react';
import { t, useTheme } from '@superset-ui/core';
import { Button } from '@superset-ui/core/components';
import { Icons } from '@superset-ui/core/components/Icons';

export type RunQueryButtonProps = {
  loading: boolean;
  onQuery: () => void;
  onStop: () => void;
  errorMessage: ReactNode;
  isNewChart: boolean;
  canStopQuery: boolean;
  chartIsStale: boolean;
};
export const RunQueryButton = ({
  loading,
  onQuery,
  onStop,
  errorMessage,
  isNewChart,
  canStopQuery,
  chartIsStale,
}: RunQueryButtonProps) => {
  const theme = useTheme();
  return loading ? (
    <Button onClick={onStop} buttonStyle="danger" disabled={!canStopQuery}>
      <Icons.Square iconSize="xs" iconColor={theme.colors.primary.light5} />
      {t('Stop')}
    </Button>
  ) : (
    <Button
      onClick={onQuery}
      buttonStyle={chartIsStale ? 'primary' : 'secondary'}
      disabled={!!errorMessage}
      data-test="run-query-button"
    >
      {isNewChart ? t('Create chart') : t('Update chart')}
    </Button>
  );
};
