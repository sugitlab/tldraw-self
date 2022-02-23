import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import { TDBinding, TDShape } from '@tldraw/tldraw'

// Create the doc
export const doc = new Y.Doc()

export const roomID = ''

// Create a websocket provider
export const provider = new WebsocketProvider(
  'ws://localhost:4000',
  roomID,
  doc,
  {
    connect: false,
  }
)

// Export the provider's awareness API
export const awareness = provider.awareness

export const yShapes: Y.Map<TDShape> = doc.getMap('shapes')
export const yBindings: Y.Map<TDBinding> = doc.getMap('bindings')

// Create an undo manager for the shapes and binding maps
export const undoManager = new Y.UndoManager([yShapes, yBindings])
