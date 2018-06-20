import { ActionWithPayload } from './actionWithPayload';

export function createAction(type: string, payload?): ActionWithPayload {
  let action: ActionWithPayload = { type, payload };
  return action;
}
