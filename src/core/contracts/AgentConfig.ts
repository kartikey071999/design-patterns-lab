export interface AgentConfig {
  readonly kind: string; 
  readonly trigger?: {
    type: string;
    config?: Record<string, unknown>;
  };
  readonly execution?: {
    mode: string;
    options?: Record<string, unknown>;
  };
}
