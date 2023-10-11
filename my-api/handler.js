const mongoose = require('mongoose');
const Student = require('./models/studentModel'); // Update to use the correct model and path
const Invoice = require('../../models/invoiceModel'); // Update to use the correct model and path
const Fee_Due = require('./models/feepaymentModel'); // Update to use the correct model and path
const Defaulter = require('./models/Defaulter'); // Update to use the correct model and path

// MongoDB connection URL
const mongoURI = 'mongodb+srv://assignment:edviron@cluster0.ebxruu8.mongodb.net';

mongoose.Promise = global.Promise;

module.exports.handler = async (event) => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    const currentDate = new Date();

    // Find past-due students by querying invoices
    const pastDueStudents = await Student.find({
      _id: {
        $in: await Invoice.find({
          status: 'unpaid',
          dueDate: { $lt: currentDate },
        }).distinct('students'),
      },
    });

    // Add defaulters to the Defaulter table
    for (const students of pastDueStudents) {
      const defaulter = new Defaulter({
        studentId: students._id,
        name: `${students.firstName} ${students.lastName}`,
        defaulterDate: currentDate,
      });
      await defaulter.save();
    }

    await mongoose.connection.close();

    return {
      statusCode: 200,
      body: JSON.stringify(pastDueStudents),
    };
  } catch (error) {
    console.error('❌ Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
