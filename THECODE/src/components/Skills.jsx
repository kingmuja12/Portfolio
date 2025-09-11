const skills = {
  'Programming': ['Python', 'C/C++', 'JavaScript', 'Dart', 'MATLAB'],
  'Frameworks & Libraries': ['React', 'TensorFlow', 'PyTorch', 'OpenCV', 'Pandas'],
  'Tools': ['Docker','Flutter','ROS2','Gazebo','KiCad']
}

export default function Skills(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Technical Expertise</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(skills).map(([cat,list],i)=> (
          <div key={i} className="p-4 glass rounded-2xl border border-white/6">
            <div className="font-semibold text-lg text-green-300 mb-2">{cat}</div>
            <div className="space-y-2">
              {list.map((s,si)=> (
                <div key={si} className="flex items-center gap-3 text-gray-300"> <div className="w-2 h-2 rounded-full bg-green-300"/> <div className="text-sm">{s}</div></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
