/* eslint-disable no-console */
import mongoose from 'mongoose';

const MONGO_URI: string = import.meta.env.MONGO_URI;
if (!MONGO_URI) {
  throw new Error('❌ MONGO_URI no definida en variables de entorno.');
}

let isConnected = false;

const connectDB = async (): Promise<void> => {
  if (isConnected || mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(MONGO_URI);

    isConnected = true;

    if (import.meta.env.MODE !== 'production') {
      console.log('✅ Conectado a MongoDB');
    }
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:', error);
    throw error;
  }
};

export { connectDB, mongoose };
