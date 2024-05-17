type Action = 'pause' | 'stop' | 'play' | 'rewind' | 'fast-forward';

function play(action: Action): string {
  switch (action) {
    case 'play':
      return 'Playing';
    case 'pause':
      return 'Paused';
    case 'stop':
      return 'Stopped';
    case 'rewind':
      return 'Rewinding';
    case 'fast-forward':
      return 'Fast-forwarding';
    default:
      throw new Error('Invalid action');
  }
}
