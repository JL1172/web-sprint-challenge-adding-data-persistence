/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').truncate()
  await knex('tasks').insert([
    {task_description: 'clear driveway of debris', task_notes : "use leaf blower and or broom",project_id : 1},
    {task_description : "use caulk to seal gap between driveway and house",project_id : 1},
    {task_description: 'apply tar sealant to cracks in driveway', task_notes : "be thorough in this step", project_id : 1},
    {task_description: 'apply tar evenly to entire driveway service', project_id : 1},
    {task_description: 'remove old window', project_id : 2},
    {task_description: 'prepare framing for new window', task_notes : "level, plumb, and square, and verify measurements", project_id : 2},
    {task_description: 'install window', task_notes : "level, plumb, and square", project_id : 2},
    {task_description: 'apply air dam', task_notes : "put tubing in gaps and apply air dam generously", project_id : 2},
    {task_description: 'reinstall trim', project_id : 2},
  ]);
};
