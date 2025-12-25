import { AgentDescriptor } from './AgentDescriptor';
import { AgentConfig } from './AgentConfig';

export interface AgentDefinition extends AgentDescriptor {
  readonly config: AgentConfig;
}
