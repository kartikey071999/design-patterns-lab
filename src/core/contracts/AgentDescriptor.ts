import { AgentType } from './AgentType';

export interface AgentDescriptor {
  readonly id: string;
  readonly name: string;
  readonly type: AgentType;
  readonly purpose: string;
}
